module.exports = ({
  name: "начать-стрим",
  code: `
$onlyIf[$message!=;**Укажите название стрима**]
$title[Стрим: $message]
$description[
**Статистика:

🗨️ | Комментарии: +$random[0;100]

👍 | Лайки: +$random[0;300]

👥 | Подписчики: +$random[0;250]

💰 | Донаты: +$random[0;50]**
$image[https://abrakadabra.fun/uploads/posts/2021-12/1640929100_13-abrakadabra-fun-p-pereriv-na-strime-19.jpg]
$setUserVar[subs;$sum[$getUserVar[subs];$random[0;250]]]
$setUserVar[like;$sum[$getUserVar[like];$random[0;300]]]
$setUserVar[comm;$sum[$getUserVar[comm];$random[0;100]]]
$setUserVar[donate;$sum[$getUserVar[donate];$random[0;50]]]
$footer[Разработчик: meow <3]
`
});
