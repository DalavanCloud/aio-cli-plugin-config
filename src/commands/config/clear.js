/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { Command } = require('@oclif/command')
const Conf = require('conf')

class ClearCommand extends Command {
  async run () {
    const { args } = this.parse(ClearCommand)
    return this.clear(args.key)
  }

  async clear (key) {
    const conf = new Conf()
    if (key) {
      conf.delete(key)
    } else {
      conf.clear()
    }

    return true
  }
}

ClearCommand.args = [
  { name: 'key' }
]

ClearCommand.description = 'clears all persistent config values, or for a specific key'

module.exports = ClearCommand
