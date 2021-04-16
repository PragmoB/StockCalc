var handle = new Vue({
    el: '#wrap',
    data: {
        capital : 0,
        earning : 0,
        ROE : 0,
        required : 0,
        over_earning_ratio : 0,
        over_earning : 0,
        premium : 0,
        ideal_market_cap : 0,
        stocks : 0,
        ideal_price : 0,

        calc_done : false
    },
    methods: {
        calculate: function() {
            this.calc_done = false;

            this.ROE = this.earning / this.capital * 100;
            this.over_earning_ratio = this.ROE - this.required;
            this.over_earning = this.capital * 100000000 * this.over_earning_ratio / 100;
            this.premium = this.over_earning / this.required * 100;
            this.ideal_market_cap = this.premium + this.capital * 100000000;
            this.ideal_price = this.ideal_market_cap / this.stocks;

            this.ROE = numberWithCommas(Math.round(this.ROE * 100) / 100);
            this.over_earning_ratio = numberWithCommas(Math.round(this.over_earning_ratio * 100) / 100);
            this.over_earning = numberWithCommas(Math.round(this.over_earning));
            this.premium = numberWithCommas(Math.round(this.premium));
            this.ideal_market_cap = numberWithCommas(Math.round(this.ideal_market_cap));
            this.ideal_price = numberWithCommas(Math.round(this.ideal_price));

            this.calc_done = true;
        }
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}