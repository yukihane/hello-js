'use strict';

module.exports = robot => {
    robot.hear(/hello>/i, msg => {
        const user_id = msg.message.user.id;
        msg.send(`Hello, <@${user_id}>`);
    })
}