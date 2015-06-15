/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import <%= nameLowerCase %>Schema from '../model/<%= name %>.model';
import *as _ from 'lodash';

<%= nameLowerCase %>Schema.statics.getAll = () =>
{
  var _promise = (resolve, reject) =>
  {
    var _query = {};

    <%= name %>
      .find(_query)
      .exec((err, todos) =>
      {
        err ? reject(err)
          : resolve(todos);
      });
  }

  return new Promise(_promise);
}

<%= nameLowerCase %>Schema.statics.createNew = (<%= nameLowerCase %>) =>
{
  var _promise = (resolve, reject) =>
  {
    if (!_.isObject(<%= nameLowerCase %>))
    {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    var _something = new <%= name %>(<%= nameLowerCase %>);

    _something.save((err, saved) =>
    {
      err ? reject(err)
        : resolve(saved);
    });
  }

  return new Promise(_promise);
}

<%= nameLowerCase %>chema.statics.removeById = (id) =>
{
  var _promise = (resolve, reject) =>
  {
    if (!_.isString(id))
    {
      return reject(new TypeError('Id is not a valid string.'));
    }

    <%= name %>
      .findByIdAndRemove(id)
      .exec((err, deleted) =>
      {
        err ? reject(err)
          : resolve();
      });
  }

  return new Promise(_promise);
}

var <%= name %> = mongoose.model('<%= name %>', <%= nameLowerCase %>Schema);

export <%= name %>;
