const orderForm = document.getElementById("orderForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const linkField = document.getElementById("linkField"); // حقل الرابط

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const name = document.getElementById("name").value;
  const transaction = document.getElementById("transaction").value;

  // إذا تم اختيار "مشاهدات" أو "لايكات"، قم بعرض حقل الرابط
  if (product === "مشاهدات" || product === "لايكات") {
    linkField.style.display = "block";
    const link = document.getElementById("link").value;
    // أضف الرابط إلى بيانات البريد الإلكتروني أو قم بتنفيذ الإجراء المناسب
  }

  const emailData = {
    SecureToken: "004a08a9-77d3-444b-ba27-0ce6443dd281",
    To: 'mnzar7162@gmail.com',
    From: "mnzar7162@gmail.com",
    Subject: "طلب جديد",
    Body: `نوع المنتج: ${product}<br>الكمية: ${quantity}<br>اسم المستخدم: ${name}<br>رقم عملية التحويل: ${transaction}`
  };

  Email.send(emailData).then(function (message) {
    confirmationMessage.style.display = "block";
  });
});
