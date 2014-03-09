/**
 * Created by walter on 3/5/14.
 */
'use strict';

describe('Module: security', function() {

    beforeEach(module('atsApp'));

    it('successfully loads the latest version of the module', inject(function(version) {
        expect(version).toBe('0.0.1');
    }));

    describe('Service: httpRequestQueue', function() {
        var hrq;
        beforeEach(inject(function(httpRequestQueue) {
            hrq = httpRequestQueue;
        }));

        it('calls for test data', function() {
            expect(hrq.callForTest()).toBe('This is a test....only a test');

        });

        it('adds adds request to the request queue', inject(function($q) {
            expect(hrq.retrieveQueueRequestCount()).toBe(0);

            var config = {
                    method: 'GET',
                    url: '/some/relative/path'
                };
            var deferred = $q.defer();

            hrq.addHttpRequest(config,deferred);

            expect(hrq.retrieveQueueRequestCount()).toBe(1);
        }));


        it('module is loaded', inject(function(httpRequestQueue) {
            expect(httpRequestQueue.callForTest()).toBe('This is a test....only a test');
        }));
    })



});