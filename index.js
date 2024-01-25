$(function () {
    // 送信
    $('form').submit(function () {
        var names = = $('input[name="name"]').val();
        var university = $('input[name="university"]').val();
        var grade = $('input[name="grade"]').val();
        var industry = $('input[name="industry"]').val();
        var company = $('input[name="company"]').val();
        var content = $('textarea[name="content"]').val();

        var msg = `名前：${names}\n大学：${university}\n学年：${grade}\n志望業界：${industry}\n志望企業：${company}\n相談内容：${content}`;
        sendText(msg);

        return false;
    });
});

/*
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
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `希望日：${date}\n人数：${number}\n氏名：${names}`;
        sendText(msg);

        return false;
    });
});
*/
