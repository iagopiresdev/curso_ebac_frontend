let tasks = $('#tasks_container');

function add(){
    let text = $('#add_task').val();
    let task = $('<span class="tasks"><input type="checkbox"><label></label></span>');
    task.find('label').text(text);
    tasks.append(task);
    $('#add_task').val('');
}

function check(){
    let labels = $('.tasks label');
    let checkboxes = $('.tasks input');
    for (let i = 0; i < labels.length; i++) {
        if (checkboxes[i].checked) {
            labels[i].css('textDecoration', 'line-through');
        }
        else {
            labels[i].css('textDecoration', 'none');
        }
    }
}

function deleteAll(){
    let checkboxes = $('.tasks input');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxes[i].parent().remove();
            i--;
        }
    }
}

function counter(){
    let labels = $('.tasks label');
    $('#counter').text('You have ' + labels.length + ' tasks left.');
}

// Path: jquery/script.js
