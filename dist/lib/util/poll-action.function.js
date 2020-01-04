"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(updateIntervalMs, maxDurationMs, action) {
    return new Promise(function (resolve, reject) {
        var interval;
        var timeout = setTimeout(function () {
            clearTimeout(timeout);
            if (interval) {
                clearTimeout(interval);
            }
            reject("Action timed out after " + maxDurationMs + " ms");
        }, maxDurationMs);
        var startInterval = function () {
            interval = setTimeout(function intervalFunc() {
                action().then(function (result) {
                    if (!result) {
                        interval = setTimeout(intervalFunc, updateIntervalMs);
                    }
                    else {
                        clearTimeout(timeout);
                        clearTimeout(interval);
                        resolve(result);
                    }
                }).catch(function () {
                    interval = setTimeout(intervalFunc, updateIntervalMs);
                });
            }, updateIntervalMs);
        };
        action().then(function (result) {
            if (!result) {
                startInterval();
            }
            else {
                clearTimeout(timeout);
                resolve(result);
            }
        }).catch(function () {
            startInterval();
        });
    });
}
exports.timeout = timeout;
