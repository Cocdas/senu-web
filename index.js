<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading </title>
    <link rel="stylesheet" href="styles.css"> <!-- Link your CSS file -->
</head>
<body>
    <!-- Loading Animation -->
    <div class="loader">
        <div class="justify-content-center jimu-primary-loading"></div>
    </div>

    <!-- Main Content Placeholder (not visible, just for demonstration) -->
    <div id="main-content" style="display:none;">
        <!-- Content that will be displayed after loading -->
    </div>

    <script>
        window.onload = function() {
            setTimeout(function() {
                // Redirect to the target page after loading animation
                window.location.href = 'home.html';
            }, 3000); // Adjust the timeout duration as needed
        }
    </script>
</body>
</html>
