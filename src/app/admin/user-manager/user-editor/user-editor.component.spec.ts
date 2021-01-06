import { UserEditorComponent } from './user-editor.component';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

describe('UserListComponent', () => {
  let component: UserEditorComponent;
  let user: User;
  let mockUserService: any;
  let mockEventService: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditorComponent],
      providers: [
        { provide: EventService, useValue: mockEventService},
        { provide: UserService, useValue: mockUserService},
      ]
    })

    user = { id : "a", firstname : 'lars', lastname : 'larsen', email : 'lars@test.dk', birthdate : new Date('02-02-2020') };

    mockUserService = jasmine.createSpyObj(['updateUsers', 'deleteUser']);
    mockEventService = jasmine.createSpyObj(['selectUser', 'requestReload', 'userSelected']);

    component = new UserEditorComponent(mockUserService, mockEventService);
  })

  describe('delete', () => {
    it('should call deleteUser once and set selectedUser to empty object of type user', () => {
      mockUserService.deleteUser.and.returnValue(of(true))
      component.selectedUser = user;

      component.deleteUser();

      expect(component.selectedUser).toEqual(new User());
      expect(mockUserService.deleteUser).toHaveBeenCalledTimes(1);
    })
  })

  describe('edit', () => {
   it('should make one call to updateUsers with the value [user]', () => {
    mockUserService.updateUsers.and.returnValue(of(true))
    component.selectedUser = user;

    component.editUser();

    expect(mockUserService.updateUsers).toHaveBeenCalledTimes(1);
    expect(mockUserService.updateUsers).toHaveBeenCalledWith([user]);
   })
  })

  describe('reset', () => {
    it('should call selectUser once with an empty user and set selectedUser to empty object of type user', () => {
      component.selectedUser = user;

      component.reset();

      expect(mockEventService.selectUser).toHaveBeenCalledTimes(1)
      expect(mockEventService.selectUser).toHaveBeenCalledWith(new User())
      expect(component.selectedUser).toEqual(new User())

    })
  })


})
