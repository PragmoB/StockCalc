$(document).ready(function() {

    $("#calculate").click(function() {
        
        var ROE = $("#earning").val() / $("#capital").val() * 100;
        var OverEarningRatio = ROE - $("#required").val();
        var OverEarning = $("#capital").val() * 100000000 *  OverEarningRatio / 100;
        var premium = OverEarning / $("#required").val() * 100;
        var IdealMarketCap = premium + $("#capital").val() * 100000000;
        var IdealPrice = IdealMarketCap / $("#stocks").val();

        $("#ROE").text(ROE.toFixed(2));
        $("#over-earning-ratio").text(OverEarningRatio.toFixed(2));
        $("#over-earning").text(numberWithCommas(OverEarning.toFixed(0)));
        $("#premium").text(numberWithCommas(premium.toFixed(0)));
        $("#ideal-market-cap").text(numberWithCommas(IdealMarketCap.toFixed(0)));
        $("#ideal-price").text(numberWithCommas(IdealPrice.toFixed(0)));

        $("#result").css("display", "block");
    });
    
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

