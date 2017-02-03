/**
 * Created by Nikita on 2/3/17.
 */

'use strict';

export default function type(type) {
    return Object.prototype.toString.call(type).slice(8, -1)
}