<?php
// Данные для подключения к базе данных
$servername = "localhost";
$username = "root";  // Имя пользователя MySQL
$password = "";      // Пароль MySQL
$dbname = "collaboration_requests";  // Имя базы данных

// Подключение к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Валидация данных
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Подготовка SQL-запроса для вставки данных в базу
            $stmt = $conn->prepare("INSERT INTO requests (name, email, subject, message) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $name, $email, $subject, $message);

            // Выполнение SQL-запроса
            if ($stmt->execute()) {
                echo "Спасибо! Ваша заявка успешно отправлена.";
            } else {
                echo "Ошибка при отправке заявки: " . $conn->error;
            }

            // Закрытие подготовленного выражения
            $stmt->close();
        } else {
            echo "Ошибка: некорректный email.";
        }
    } else {
        echo "Ошибка: все поля обязательны для заполнения.";
    }
} else {
    echo "Ошибка: некорректный метод запроса.";
}

// Закрытие подключения к базе данных
$conn->close();
?>
