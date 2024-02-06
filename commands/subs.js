module.exports = ({
  name: "отключить-бота",
  code: `
$onlyPerms[administrator;**Вы не разработчик бота и не администратор!**]
$title[Отключение бота]
$description[
**Отключение бота**
]
$footer[Разработчик: meow :3]
$shutdown
`
});