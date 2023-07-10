(function($, Drupal) {
    'use strict';
    Drupal.behaviors.cookieMarketing = {
        attach: function(e, context, settings) {
            $('.eu-cookie-compliance-default-button').once().click(function() {
                eulerian_set_cookie()
            });
            $('.eu-cookie-compliance-save-preferences-button').once().click(function() {
                eulerian_set_cookie()
            });
        }
    };

    Drupal.behaviors.cookieComplianceShow = {
        attach: function(e, context, settings) {
            $('.see-more-cookies').once().click(function() {
                let containerInfo = $('#eu-cookie-compliance-categories');
                if (!containerInfo.hasClass('block-visible')) {
                    containerInfo.addClass('block-visible');
                } else {
                    containerInfo.removeClass('block-visible');
                }
            });
        }
    };

    function eulerian_set_cookie() {
        var categories;
        categories = getCookie('cookie-agreed-categories');
        if (categories !== undefined) {
            if (typeof _oEa != "undefined" && typeof EA_epmGet != "undefined") {
                var cookie_required = { type: "required", id: 1, value: (categories.includes('obligatorios')) ? 1 : 0 };
                var cookie_tracking = { type: "tracking", id: 10, value: (categories.includes('tracking')) ? 1 : 0 };
                var cookie_marketing = { type: "marketing", id: 19, value: (categories.includes('marketing')) ? 1 : 0 };

                var obj_categories = EA_epmGet();

                var tracking_id = 10;
                var tracking_index = obj_categories.findIndex((obj => obj.id == tracking_id));
                var marketing_id = 19;
                var marketing_index = obj_categories.findIndex((obj => obj.id == marketing_id));
                var send_object = true;

                //There are four different scenes in DMP:
                //1 - Required												-> the script will not be activated. If it is activated, is because of a change in the preferences of cookies and it will be notified to DMP. 
                //2 - Required / Tracking							-> Modify obj_categories
                //3 - Required / Marketing						-> Modify obj_categories and “_oEa.cookieset(‘optinMarketing’, val, 1);”
                //4 - Required / Tracking / Marketing -> EA_epmSetAllowAll(); and “_oEa.cookieset(‘optinMarketing’, val, 1);”

                //case 1
                if (cookie_required.value == 1 && cookie_tracking.value == 0 && cookie_marketing.value == 0) {
                    if (obj_categories[tracking_index].allowed == false && obj_categories[marketing_index].allowed == false) {
                        send_object = false;
                    }
                    obj_categories[tracking_index].allowed = false;
                    obj_categories[tracking_index].denied = true;
                    obj_categories[marketing_index].allowed = false;
                    obj_categories[marketing_index].denied = true;
                    //case 2
                } else if (cookie_required.value == 1 && cookie_tracking.value == 1 && cookie_marketing.value == 0) {
                    obj_categories[tracking_index].allowed = true;
                    obj_categories[tracking_index].denied = false;
                    obj_categories[marketing_index].allowed = false;
                    obj_categories[marketing_index].denied = true;
                    //case 3
                } else if (cookie_required.value == 1 && cookie_tracking.value == 0 && cookie_marketing.value == 1) {
                    obj_categories[tracking_index].allowed = false;
                    obj_categories[tracking_index].denied = true;
                    obj_categories[marketing_index].allowed = true;
                    obj_categories[marketing_index].denied = false;
                    _oEa.cookieset('optinMarketing', 1, 1);
                    //case 4
                } else if (cookie_required.value == 1 && cookie_tracking.value == 1 && cookie_marketing.value == 1) {
                    _oEa.cookieset('optinMarketing', 1, 1);
                    EA_epmSetAllowAll();
                }

                if (send_object) {
                    EA_epmSet(obj_categories);
                    EA_epmEnd();
                }
            }
        }
    }

    function getCookie(cookie) {
        return document.cookie.split(';').reduce(function(prev, c) {
            var arr = c.split('=');
            return (arr[0].trim() === cookie) ? arr[1] : prev;
        }, undefined);
    }


})(jQuery, Drupal)
