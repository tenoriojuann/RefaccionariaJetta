import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

const SIDE_BAR_DATA: SideBarMenu[] = [
  {
    name: 'Inicio',
    iconName: 'home',
    routerLink: '/'
  }
];


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  public treeControl: NestedTreeControl<SideBarMenu>;

  public dataSource: MatTreeNestedDataSource<SideBarMenu>;

  constructor() {
    this.treeControl = new NestedTreeControl<SideBarMenu>(node => {
      return node.children;
    });
    this.dataSource = new MatTreeNestedDataSource<SideBarMenu>();
    this.dataSource.data = SIDE_BAR_DATA;
  }

  public hasChild(_: number, node: SideBarMenu) {
    return !!node.children && node.children.length > 0;
  }

  public onSidenavClose() {
    this.sidenavClose.emit();
  }

  ngOnInit() {
  }

}

interface SideBarMenu {
  name: string;
  iconName?: string;
  children?: SideBarMenu[];
  routerLink?: string;
}
