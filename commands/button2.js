module.exports = ({
   name: "получить-кнопку",
   code: `
$if[1 == $message]

$onlyIf[$getUserVar[subs]>5000;**❌ Вам не хватает подписчиков!**]

$onlyIf[$getUserVar[bronze]==❌;**У вас есть уже эта кнопка!**]

$title[🥉 Получение кнопки]

$description[
**🥉 | Вы успешно получили бронзовую кнопку!**]

$setUserVar[bronze;✅]

$footer[Разработчик: meow <3]

$updateCommands

$else

$endif


$if[2 == $message]

$onlyIf[$getUserVar[subs]>100000;**❌ Вам не хватает подписчиков!**]

$onlyIf[$getUserVar[iron]==❌;**У вас есть уже эта кнопка!**]

$title[🥉 Получение кнопки]

$description[
**🥉 | Вы успешно получили серебряную кнопку!**]

$setUserVar[iron;✅]

$else

$endif
`
})

