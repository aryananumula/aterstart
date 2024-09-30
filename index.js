function start():
  await fetch("https://aternos.org/ajax/server/start?access-credits=false&TOKEN=k6mbo0FPDDWEnuiRlNdg&SEC=4hxhdulxjrl00000%3A1rt3lgv3xcf00000&SERVER=lydy6wq2TjaVFknW", {
      "credentials": "include",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:130.0) Gecko/20100101 Firefox/130.0",
          "Accept": "*/*",
          "Accept-Language": "en-US,en;q=0.5",
          "Sec-GPC": "1",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "Priority": "u=0"
      },
      "referrer": "https://aternos.org/server/",
      "method": "GET",
      "mode": "cors"
  });
