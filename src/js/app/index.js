require(['jquery'], function($) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(res) {
            console.log(res)
            if (res.code === 1) {
                render('#list-tpl', res.data, '.list')
            }
        },
        error: function(error) {
            console.warn(error)
        }
    })
})