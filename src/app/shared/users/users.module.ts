/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {UserGroupsComponent} from "./user-groups/user-groups.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";
import {NewUserComponent} from "./new-user/new-user.component";
import {UsersComponent} from "./users.component";
import {GroupsSuggestionsComponent} from "./user-groups/suggestions/groups-suggestions.component";
import {TagModule} from "../tag/tag.module";
import {InputModule} from "../input/input.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagModule,
    InputModule
  ],
  declarations: [
    UserGroupsComponent,
    GroupsSuggestionsComponent,
    UserListComponent,
    UserComponent,
    NewUserComponent,
    UsersComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule {
}
