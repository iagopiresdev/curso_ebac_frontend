let tasks = $('#tasks_container');

function add(){
    let text = $('#text_task').val();
    if (text == '') {
        alert('Please, enter a task.');
        return;
    }
    else if (text.length > 30) {
        alert('Please, enter a task with less than 30 characters.');
        return;
    }
    else{
        let task = $('<div class="tasks"><input class="checkboxes" type="checkbox"><label></label></div>');
        task.find('label').text(text);
        tasks.append(task);
        $('#text_task').val('');
        counter();
    }
}

function counter(){
    let labels = $('.tasks label');
    labels = labels.filter(function(){
        return !$(this).parent().find('input').is(':checked');
    });
    $('#counter').text('You have ' + labels.length + ' tasks left.');
}

$("#tasks_container").on('click', '.checkboxes', function(){
    let label = $(this).parent().find('label');
    if ($(this).is(':checked')) {
        label.css('text-decoration', 'line-through');
        label.css('color', '#B1BACB')
        counter();
    }
    else {
        label.css('text-decoration', 'none');
        label.css('color', '#000000')
        counter();
    }
});

$("#bottom").on('click', '#clear_all', function(){
    $('.tasks').remove();
    counter();
});

$("#add_task").click(add);