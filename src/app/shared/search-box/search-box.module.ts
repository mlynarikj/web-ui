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
import {HighlightPipe} from '../highlight.pipe';
import {PickerModule} from '../picker/picker.module';
import {SearchButtonComponent} from './button/search-button.component';
import {SearchInputComponent} from './input/search-input.component';
import {SuggestionItemComponent} from './input/suggestions/item/search-suggestion-item.component';
import {SearchSuggestionsComponent} from './input/suggestions/search-suggestions.component';
import {AttributeConditionComponent} from './query-item/attribute-condition/attribute-condition.component';
import {ConditionSuggestionsComponent} from './query-item/condition-suggestions/condition-suggestions.component';
import {QueryItemComponent} from './query-item/query-item.component';
import {SearchBoxComponent} from './search-box.component';
import {TruncatePipe} from './truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PickerModule
  ],
  declarations: [
    SearchBoxComponent,
    QueryItemComponent,
    SearchSuggestionsComponent,
    SearchInputComponent,
    SearchButtonComponent,
    ConditionSuggestionsComponent,
    HighlightPipe,
    SuggestionItemComponent,
    TruncatePipe,
    AttributeConditionComponent
  ],
  exports: [
    SearchBoxComponent,
    HighlightPipe,
    QueryItemComponent
  ]
})
export class SearchBoxModule {
}
