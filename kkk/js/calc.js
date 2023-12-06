document.addEventListener("DOMContentLoaded", function () {
    function change(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
  
    function input_check(target) {
      let kakaku = "";
      let conditions1 = 0;
      let conditions2 = 0;
      let conditions3 = 0;
      let conditions4 = "";
      let m;
  
      if (target === "h28") {
        kakaku = document.getElementById("text1").value;
        conditions1 = 11999999;
        conditions2 = 12000000;
        conditions3 = 2300000;
        conditions4 = "-2,300,000＝";
      } else if (target === "h25-h27") {
        kakaku = document.getElementById("text2").value;
        conditions1 = 14999999;
        conditions2 = 15000000;
        conditions3 = 2450000;
        conditions4 = "-2,450,000＝";
      } else if (target === "h29") {
        kakaku = document.getElementById("text3").value;
        conditions1 = 999999;
        conditions2 = 0;
        conditions3 = 2200000;
        conditions4 = "-2,200,000＝";
      } else if (target === "r02") {
        kakaku = document.getElementById("text4").value;
        conditions1 = 999999;
        conditions2 = 0;
        conditions3 = 1950000;
        conditions4 = "-1,950,000＝";
      }
  
      m = kakaku;
  
      if (m === "" || m == 0 || isNaN(m)) {
        alert("入力が間違っています。");
        return;
      }
  
      m = parseInt(m);
  
      switch (target) {
        default:
          if (m > 0) {
            if (m <= 650999) {
              z = 0;
              alert("給与所得の金額は、0円になります。");
            } else if (m >= 651000 && m <= 1618999) {
              z = m - 650000;
              alert("給与所得の金額は、" + change(kakaku) + "－650,000＝" + change(z) + "円になります。");
            } else if (m >= 1619000 && m <= 1619999) {
              z = 969000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1620000 && m <= 1621999) {
              z = 970000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1622000 && m <= 1623999) {
              z = 972000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1624000 && m <= 1627999) {
              z = 974000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1628000 && m <= 1799999) {
              m = (parseInt(m / 4000)) * 4000;
              z = (m * 60 / 100);
              alert("給与所得の金額は、" + "(" + change(kakaku) + "÷4 (千円未満の端数切捨て))×4×60％＝" + change(z) + "円になります。");
            } else if (m >= 1800000 && m <= 3599999) {
              m = (parseInt(m / 4000)) * 4000;
              z = (m * 70 / 100 - 180000);
              alert("給与所得の金額は、" + "(" + change(kakaku) + "÷4 (千円未満の端数切捨て))×4×70％－180,000＝" + change(z) + "円になります。");
            } else if (m >= 3600000 && m <= 6599999) {
              m = (parseInt(m / 4000)) * 4000;
              z = (m * 80 / 100 - 540000);
              alert("給与所得の金額は、" + "(" + change(kakaku) + "÷4 (千円未満の端数切捨て))×4×80％－540,000＝" + change(z) + "円になります。");
            } else if (m >= 6600000 && m <= 9999999) {
              z = (Math.floor(m * 90 / 100) - 1200000);
              alert("給与所得の金額は、" + change(kakaku) + "×90％(一円未満の端数切捨て)－1,200,000＝" + change(Math.floor(z)) + "(一円未満の端数切捨て)円になります。");
            } else if (m >= 10000000 && m <= conditions1) {
              z = (Math.floor(m * 95 / 100) - 1700000);
              alert("給与所得の金額は" + change(kakaku) + "×95％(一円未満の端数切捨て)－1,700,000＝" + change(Math.floor(z)) + "(一円未満の端数切捨て)円になります。");
            } else if (m >= conditions2) {
              z = m - conditions3;
              alert("給与所得の金額は、" + change(kakaku) + conditions4 + change(z) + "円になります。");
            } else {
              alert("入力が間違っています。半角の数値で入力してください。");
            }
          }
          break;
  
        case "r02":
          if (m > 0) {
            if (m <= 550999) {
              z = 0;
              alert("給与所得の金額は、0円になります。");
            } else if (m >= 551000 && m <= 1618999) {
              z = m - 550000;
              alert("給与所得の金額は、" + change(kakaku) + "－550,000＝" + change(z) + "円になります。");
            } else if (m >= 1619000 && m <= 1619999) {
              z = 1069000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1620000 && m <= 1620999) {
              z = 1070000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1621000 && m <= 1621999) {
              z = 1071000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1622000 && m <= 1622999) {
              z = 1072000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1623000 && m <= 1623999) {
              z = 1073000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1624000 && m <= 1624999) {
              z = 1074000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1625000 && m <= 1625000) {
              z = 1075000;
              alert("給与所得の金額は、" + change(z) + "円になります。");
            } else if (m >= 1625000 && m <= 1800000) {
              m = (parseInt(m / 4000)) * 4000;
              z = m * 60 / 100 + 100000;
              alert("給与所得の金額は、" + "(" + change(kakaku) + "÷4 (千円未満の端数切捨て))×4×60％+100,000＝" + change(z) + "円になります。");
            } else if (m >= 1800001 && m <= 3600000) {
              m = (parseInt(m / 4000)) * 4000;
              z = m * 70 / 100 - 80000;
              alert("給与所得の金額は、" + "(" + change(kakaku) + "÷4 (千円未満の端数切捨て))×4×70％－80,000＝" + change(z) + "円になります。");
            } else if (m >= 3600001 && m <= 6600000) {
              m = (parseInt(m / 4000)) * 4000;
              z = m * 80 / 100 - 440000;
              alert("給与所得の金額は、" + "(" + change(kakaku) + "÷4 (千円未満の端数切捨て))×4×80％－440,000＝" + change(z) + "円になります。");
            } else if (m >= 6600001 && m <= 8500000) {
              z = Math.floor(m * 90 / 100) - 1100000;
              alert("給与所得の金額は、" + change(kakaku) + "×90％(一円未満の端数切捨て)－1,100,000＝" + change(Math.floor(z)) + "(一円未満の端数切捨て)円になります。");
            } else if (m >= conditions2) {
              z = m - conditions3;
              alert("給与所得の金額は、" + change(kakaku) + conditions4 + change(z) + "円になります。");
            } else {
              alert("入力が間違っています。半角の数値で入力してください。");
            }
          }
          break;
      }
    }
  
    function setupNumericField(id) {
      const textField = document.getElementById(id);
      textField.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, ""); // 数字以外を削除
      });
    }
  
    setupNumericField("text1");
    setupNumericField("text2");
    setupNumericField("text3");
    setupNumericField("text4");
  
    document.getElementById("result1").addEventListener("click", function () {
      input_check("h28");
    });
    document.getElementById("result2").addEventListener("click", function () {
      input_check("h25-h27");
    });
    document.getElementById("result3").addEventListener("click", function () {
      input_check("h29");
    });
    document.getElementById("result4").addEventListener("click", function () {
      input_check("r02");
    });
  
    document.getElementById("reset1").addEventListener("click", function () {
      document.getElementById("text1").value = "";
    });
    document.getElementById("reset2").addEventListener("click", function () {
      document.getElementById("text2").value = "";
    });
    document.getElementById("reset3").addEventListener("click", function () {
      document.getElementById("text3").value = "";
    });
    document.getElementById("reset4").addEventListener("click", function () {
      document.getElementById("text4").value = "";
    });
  });
  