   $(function () {
    // カレンダー
    $(function () {
        $('input[name="date00"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="text" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date01"]').val();
        var time = $('input[name="time01"]').val();
        var date = $('input[name="date02"]').val();
        var time = $('input[name="time02"]').val();
        var date = $('input[name="date03"]').val();
        var time = $('input[name="time03"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        var text = $('input[name="address"]').val();
        var tel = $('input[name="tel"]').val();
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `希望日：${date}\n希望時間：${time}\n人数：${number}\n氏名：${names}\n電話番号：${tel}`;
        sendText(msg);

        return false;
    });
});
