module.exports = ({
  name: "вывод",
  code: `
Вы успешно вывели все ваши пожертвования
Комиссия за вывод (9%)
$setUserVar[money;$sum[$getUserVar[money];$getUserVar[donate]]]
$setUserVar[donate;0]
`
});
