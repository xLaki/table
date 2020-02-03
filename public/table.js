var app = new Vue({
  el: "#app",
  data: {
    table:  [
              {
                "State": "Florida",
                "Carriers": 3,
                "Average Premium" :"$2,500",
                "Top Carrier": "State Farm",
                "Potential Savings": "$$"
              },
              {
                "State": "Georgia",
                "Carriers": 2,
                "Average Premium" :"$1,000",
                "Top Carrier": "Geico",
                "Potential Savings": "$"
              },
              {
                "State": "Texas",
                "Carriers": 5,
                "Average Premium" :"$1,250",
                "Top Carrier": "Allstate",
                "Potential Savings": "$$$"
              },
              {
                "State": "South Carolina",
                "Carriers": 7,
                "Average Premium" :"$900",
                "Top Carrier": "Progressive",
                "Potential Savings": "$$$$"
              },
              {
                "State": "California",
                "Carriers": 4,
                "Average Premium" :"$1,900",
                "Top Carrier": "Amica",
                "Potential Savings": "$$$$"
              },
            ]
  }
})