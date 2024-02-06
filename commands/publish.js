module.exports = ({
  name: "выпустить-видео",
  code: `
$onlyIf[$message!=;**Укажите название видео. Пример использования: !выпустить-видео Название_видео**]
$title[Видео $message]
$description[
**Статистика:

🗨️| Комментарии: +$random[0;400]

👍| Лайки: +$random[0;500]

👥| Подписчики: +$random[0;300]**
$image[https://image.winudf.com/v2/image/Y29tLnR2dmlkZW8ucGxheWVyaGRfc2NyZWVuc2hvdHNfM184ZmI1YTRhNQ/screen-3.jpg?fakeurl=1&type=.jpg]]
$setUserVar[subs;$sum[$getUserVar[subs];$random[0;300]]]
$setUserVar[like;$sum[$getUserVar[like];$random[0;500]]]
$setUserVar[comm;$sum[$getUserVar[comm];$random[0;400]]]
$footer[Разработчик: meow <3]
`
});
