'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = new Array();

/**
 * TODOを追加する
 * @param {string} task タスク名
 */
function todo(task) {
    tasks.push({ name: task, state: false });
}

/**
 * 
 * @param {object} taskAndIsDonePair
 * @returns {boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state;
}

function isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得する
 * @returns {array}
 */
function list() {
    return tasks
        .filter(isNotDone)
        .map(t => t.name);
}

function done(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound != -1) {
        tasks[indexFound].state = true;
    }
}

function donelist() {
    return tasks.filter(isDone).map(t => t.name);
}

/**
 * 項目を削除する
 * @param {string} task
 */
function del(task) {
    const indexFound = tasks.findIndex(t => t.name === task);
    if (indexFound != -1) {
        tasks.splice(indexFound, 1);
    }
}

module.exports = {
    todo,
    list,
    done,
    donelist,
    del
};