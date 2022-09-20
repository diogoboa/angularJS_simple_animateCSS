



var app = angular.module('myApp', ['ngAnimate']);


    app.controller('myCtrl', function($scope)
    {


        $scope.mostrar_1 = false;
        $scope.mostrar_2 = false;
        $scope.mostrar_3 = false;
        $scope.mostrar_4 = true;
        $scope.mostrar_5 = true;
        $scope.mostrar_6 = true;
        $scope.mostrar_7 = true;






        $scope.estilo_1 = function(condicao){

            if(condicao)
            {
                return 'animate__animated animate__rotateInUpRight';
            }
            else
            {
                return 'animate__animated animate__rotateOutDownLeft';
            }

        };






    }








);