/**
 * Mixpanel full API Mock - 28.8.2015
 * Author: @ArtturiSipila
 * https://mixpanel.com/help/reference/javascript-full-api-reference
 */

function MixpanelMock() {
    this.init = init;
    this.push = push;
    this.disable = disable;
    this.track = track;
    this.track_links = track_links;
    this.track_forms = track_forms;
    this.time_event = time_event;
    this.register = register;
    this.register_once = register_once;
    this.unregister = unregister;
    this.identify = identify;
    this.get_distinct_id = get_distinct_id;
    this.alias = alias;
    this.set_config = set_config;
    this.get_config = get_config;
    this.get_property = get_property;
    this.people = new people();

    function init(args) {
        console.log("mixpanel.init",args);
    }

    function push(args) {
        console.log("mixpanel.push",args);
    }

    function disable(args) {
        console.log("mixpanel.disable",args);
    }

    function track(args) {
        console.log("mixpanel.track",args);
    }

    function track_links(args) {
        console.log("mixpanel.track_links",args);
    }

    function track_forms(args) {
        console.log("mixpanel.track_forms",args);
    }

    function time_event(args) {
        console.log("mixpanel.time_event",args);
    }

    function register(args) {
        console.log("mixpanel.register",args);
    }

    function register_once(args) {
        console.log("mixpanel.register_once",args);
    }

    function unregister(args) {
        console.log("mixpanel.unregister",args);
    }

    function identify(args) {
        console.log("mixpanel.identify",args);
    }

    function get_distinct_id(args) {
        console.log("mixpanel.get_distinct_id",args);
    }

    function alias(args) {
        console.log("mixpanel.alias",args);
    }

    function set_config(args) {
        console.log("mixpanel.set_config",args);
    }

    function get_config(args) {
        console.log("mixpanel.get_config",args);
    }

    function get_property(args) {
        console.log("mixpanel.get_property",args);
    }

    function people() {
        this.set = set;
        this.set_once = set_once;
        this.increment = increment;
        this.append = append;
        this.union = union;
        this.track_charge = track_charge;
        this.clear_charges = clear_charges;
        this.delete_user = delete_user;

        function set(args) {
            console.log("mixpanel.people.set",args);
        }

        function set_once(args) {
            console.log("mixpanel.people.set_once",args);
        }

        function increment(args) {
            console.log("mixpanel.people.increment",args);
        }

        function append(args) {
            console.log("mixpanel.people.appen",args);
        }

        function union(args) {
            console.log("mixpanel.people.union",args);
        }

        function track_charge(args) {
            console.log("mixpanel.people.track_charge",args);
        }

        function clear_charges(args) {
            console.log("mixpanel.people.clear_charges",args);
        }

        function delete_user(args) {
            console.log("mixpanel.people.delete_user",args);
        }
    }
}
var mixpanel = new MixpanelMock();
