function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi"); // default sentence
describe_city("France", "Europe");
describe_city("Lahore", "Pakistan");
