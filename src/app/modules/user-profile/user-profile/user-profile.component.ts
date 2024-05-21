import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  private modalService = inject(NgbModal);
  openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg my-modal1', centered: true });
	}

  libuysellTab: any = "passport"

  libuysell(tab: any) {
      this.libuysellTab = tab
    }
}
