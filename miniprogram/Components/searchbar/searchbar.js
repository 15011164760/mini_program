Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    // showInput: function () {
    //     this.setData({
    //         inputShowed: true
    //     });
    // },
    searchBtn: function () {
        console.log(this.data.inputVal,"===");
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
});