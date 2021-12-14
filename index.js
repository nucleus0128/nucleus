$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
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
        var date = $('input[name="date"]').val();<br>
        var time = $('input[name="time"]').val();<br>
        var number = $('input[name="number"]:checked').val();<br>
        var names = '';<br>
        var tel = $('input[name="tel"]').val();
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `希望日：${date}<br>\希望時間：${time}<br>\n人数：${number}<br>\n氏名：${names}<br>\電話番号：${tel}`;
        sendText(msg);

        return false;
    });
});
