#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
/*struct de definicao do cliente*/
struct infoCliente {
  char Nome[20];
  int long CPF;
  int long RG;
  char Status[10];
  int Senha;
  void *Prox;
};
typedef struct infoCliente Cliente;

/*principal*/
int main() {
  Cliente *Inicio, *Auxilia, *Atual;
  Inicio = NULL;
  Auxilia = Inicio;
  
  int repetir=1;
  /*repeticao do menu principal*/
  system(stdin);
  while (repetir){
   
    printf("\n");
    printf("   ___ BANCO SBLS ___\n");
    printf("      ____________\n");
    printf("  Vem passar raiva, vem!\n");
    printf("---------------------------\n");
    printf("\n");
    printf("<<< O que deseja fazer? >>>\n");
    printf("ENTRAR NA FILA: [1]\n");
    printf("       ATENDER: [2]\n");
    printf("CONSULTAR TOTAL: [4]\n");
    printf("          SAIR: [5]\n");
    int decisao;
    scanf("%d",&decisao);
    fflush(stdin);

    /*entrar na fila*/
    if(decisao==1){
      system("cls");
      printf("ENTRAR NA FILA\n");
      printf("Digite algumas informações para agilizar o procedimento\n\n");
      Auxilia = NULL;
      Auxilia = (Cliente *) malloc(sizeof(Cliente));

      if(Inicio!=NULL){
        printf("Qual seu nome? ");
        gets(&Auxilia->Nome);
        printf("Qual seu CPF? apenas numeros ");
        scanf("%ld",&Auxilia->CPF);
        printf("Qual seu RG? apenas numeros ");
        scanf("%ld", &Auxilia->RG);
        Auxilia->Senha = Atual->Senha+1;
        strcpy(&Auxilia->Status,"natd");
        Atual->Prox = Auxilia;
        Atual = Auxilia;
        Auxilia->Prox = NULL;
        
        system("cls");
      }
      else{
        printf("Qual seu nome? ");
        gets(&Auxilia->Nome);
        printf("Qual seu CPF? apenas numeros ");
        scanf("%ld", &Auxilia->CPF);
        printf("Qual seu RG? apenas numeros ");
        scanf("%ld", &Auxilia->RG);
        strcpy(&Auxilia->Status,"natd");
        Auxilia->Senha = 1;
        Auxilia->Prox = NULL;
        Inicio=Auxilia;
        Atual = Auxilia;
    
        system("cls");
        }
    }
    /*atendimento de 1 cliente*/
    else if(decisao==2){
      Auxilia = Inicio;
      while (repetir==1 && Auxilia!= NULL)
      {
        system("cls");
        
        printf("---  Atendimento  ---\n");
        printf("Cliente: %s \n", &Auxilia->Nome);
        printf("Cliente: %s \n", Auxilia->Nome);
        printf("CPF: %ld - RG: %ld \n", Auxilia->CPF, Auxilia->RG);
        strcpy(&Inicio->Status,"atd");
        printf("Numero: %d \n", Auxilia->Senha);
        Auxilia->CPF = 00000000000;
        Auxilia = Auxilia->Prox;
        Inicio = Auxilia;
        system("pause");
        printf("\n");
        printf("Deseja atender o proximo cliente? 1 - SIM ; 2 - NAO ");
        scanf("%d",&repetir);
      };
      repetir = 1;
    }
    //
    else if(decisao == 4){
        Auxilia = Inicio;
        if(Auxilia!=NULL){
            system("cls");
            while(Auxilia !=NULL){
            printf("Nome: %s \n", &Auxilia->Nome);
            printf("Status: %s\n",&Auxilia->Status);
            printf("Senha: %d\n",&Auxilia->Senha);
            printf("------------------------\n");
            Auxilia = Auxilia->Prox;
            }
        }else{
            printf("Nao a pessoas na fila, no momento");
        }
    }
    else{
      repetir=0;
      }
  }
  return 0;
}