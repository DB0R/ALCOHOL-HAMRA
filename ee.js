document.getElementById('downloadBtn').addEventListener('click', function() {
  // استبدال الرابط برابط الملف الذي تريد تنزيله
  var downloadLink = 'https://www.mediafire.com/file/3nt7o3h7sz6l9tl/%D8%A7%D9%84%D9%82%D9%84%D8%B9%D9%87+%D8%A7%D9%84%D8%AD%D9%85%D8%B1%D8%A7%D8%A1.apk/file?dkey=hydd0fxivbb&r=1634/file/path/to/your/file.apk/file/path/to/your/file.apk/path/to/your/file.zip';
  var fileName = 'file.zip'; // اسم الملف المراد تنزيله

  // إنشاء عنصر رابط للتنزيل
  var link = document.createElement('a');
  link.href = downloadLink;
  link.download = fileName;
  document.body.appendChild(link);

  // تنفيذ النقر على الرابط تلقائيًا
  link.click();

  // إزالة العنصر بعد التنزيل
  document.body.removeChild(link);
});

