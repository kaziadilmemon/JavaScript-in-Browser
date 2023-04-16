<!-- The Script tag is used to insert javaScript into an HTML page. The Script tag can be used to insert external or internal Scripts.  -->

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>28</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="script.js"></script>

</head>

<body>
  Hello

  <script src="script.js"></script>
  <script>
  // Advantages of using separate script file using src attribute of script tag
  // 1. Separation of concerns
  // 2. Browser Caching

  </script>
  <script src="script.js">
    console.log("I am trying to be learn javasript Quickly") // This will be ignored
  </script>

  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
