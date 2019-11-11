console.log("Arrancando el chacitransformador")

  node_xj = require("xls-to-json");

  node_xj({
    input: "chacinado.xlsx",  // input xls
    output: "chacinado.json", // output json
    sheet: "Hoja2"  // specific sheetname
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });

