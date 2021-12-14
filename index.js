   $(function () {
    // カレンダー
    $(function () {
        $('input[name="date01"]').datepicker({
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
        var date = $('input[name="date"]').val();
        var time = $('input[name="time"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        var tel = $('input[name="tel"]').val();
        var bikou = $('input[name="text01"]').val();
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `希望日：${date}\n希望時間：${time}\n人数：${number}\n氏名：${names}\n電話番号：${tel}\n備考：${text01}`;
        sendText(msg);

        return false;
    });
});
