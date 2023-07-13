export function MainButtonClick(props) {



    if (!props.canPay || props.isLoading || props.isClosed) {
        return false;
    }
    if (props.modeOrder) {
        var comment = $('.js-order-comment-field').val();
        var params = {
            order_data: Cafe.getOrderData(),
            comment: comment
        };
        if (!window.Telegram.WebApp.initData ||
            !window.Telegram.WebApp.initData.user ||
            !window.Telegram.WebApp.initData.user.id) {
            params.user_id = props.userId;
            params.user_hash = props.userHash;
        }
        // Cafe.toggleLoading(true);
        // Cafe.apiRequest('makeOrder', params, function (result) {
        //     Cafe.toggleLoading(false);
        //     if (result.ok) {
        //         Telegram.WebApp.close();
        //     }
        //     if (result.error) {
        //         Cafe.showStatus(result.error);
        //     }
        // });
    } else {
        Cafe.toggleMode(true);
    }
}

export function MainButtonUpdate(props) {

    const mainButton = props.CafeButton;
    const canPay = props.canPay;
    const payload = props.payload;

    switch (payload) {
        case "Loading": {
            mainButton.setParams({
                is_visible: true,
                color: '#65c36d'
            }).showProgress();
            alert("Loading")
            break;
        }
        case "Pay": {

            mainButton.setParams({
                is_visible: !!canPay,
                text: 'PAY ' + FormatPrice(Cafe.totalPrice),
                color: '#31b545'
            }).hideProgress();
            alert("Pay")
            break;
        }

        default: {
            mainButton.setParams({
                is_visible: !!canPay,
                text: 'VIEW ORDER',
                color: '#31b545'
            }).hideProgress();
        }
    }

}

export function UpdateTotalPrice() {

}

export function FormatPrice(price) {
    return '$' + Cafe.formatNumber(price / 1000, 2, '.', ',');
}