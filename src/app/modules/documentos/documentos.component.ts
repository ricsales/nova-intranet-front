import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/shared/documento';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'gdpa',
    children: [
      {name: 'Boletim Diário'},
      {name: 'Leis Complementares'},
      {name: 'Resoluções'},
      {name: 'Recomendações'},
    ]
  }, {
    name: 'caops',
    children: [
      {
        name: 'Criminal',
        children: [
          {name: 'Documentos'},
          {name: 'Material de Apoio'},
        ]
      }, {
        name: 'Patrimônio Público',
        children: [
          {name: 'Documentos'},
          {name: 'Material de Apoio'},
        ]
      },
    ]
  },
  {
    name: 'unidades',
    children: [
      {name: 'dti'},
      {name: 'gestão de pessoas'},
      {name: 'planejamento'}
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {


  angForm: FormGroup;  
  termoPesquisa: string;
  

  
  ehPrimeiraBusca: boolean;
  //termoPesquisa = new FormControl('', [Validators.required, Validators.minLength(3)]);
  ultimosDocumentosPesquisados: Documento[];
  documentosEncontrados: Documento[];

  
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }


  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
  constructor(private restApi: RestApiService) {
    this.dataSource.data = TREE_DATA;
    this.ehPrimeiraBusca = true;
    
  }
  

  ngOnInit() {
    this.angForm = new FormGroup({
      termoPesquisa: new FormControl(this.termoPesquisa)
    });
  }

  onSubmit(data){
    console.log(data);
    if (data.termoPesquisa == '' || data.termoPesquisa == null){
      this.ehPrimeiraBusca = true;
      return; 
    }
    this.ehPrimeiraBusca = false;
    this.restApi.getDocumentos().subscribe((dados:Documento[]) =>{
      this.documentosEncontrados = dados;
      console.log(this.documentosEncontrados);
    });
    
  }

  abrirDocumento(documento:Documento){
    window.alert("abrir documento")
  }
  






}
