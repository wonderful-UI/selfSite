var app = angular.module("myApp", ["ngRoute",'ui.bootstrap']);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "./html/home.html",
            controller: "myCtrl"
        })
        .when("/about", {
            templateUrl : "./html/about.html",
            controller: "aboutCtrl"
        })
        .when("/portfolio", {
            templateUrl : "./html/portfolio.html",
            controller: "portfolioCtrl"
        })
        .when("/contact", {
            templateUrl : "./html/contact.html",
            controller: "contactCtrl"
        }).otherwise({
            redirectTo:'/'
        });
}]);
app.controller("headerCtrl", function ($scope) {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    $scope.navigateToPage = function (e) {
        var navLists = document.querySelectorAll("a[href^='#'] p");
        angular.forEach(navLists, function (a) {
            a = angular.element(a);
            a.context.classList.remove('active');
        });
        e.target.classList.add("active");

    }
});
app.controller("myCtrl", function ($scope,$uibModal,$interval,$timeout){
    $(".typed").typed({
        strings: ["am Queenie Zhang.", "am frontend developer.", "love all the sweet snack.", "like shopping, music and traveling."],
        typeSpeed: 1,
        loop: true,
        backDelay: 1000
    });

    $scope.promiseList = [];

    $scope.knowMore = function () {
        //Declare the modal instance
        var modalInstance = $uibModal.open({
            templateUrl: './html/knowmoredailogs.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg'
        });

        // console.log($scope.promiseList);
        if($scope.promiseList.length > 0) {
            for (var i = 0; i < $scope.promiseList.length; i++) {
                $timeout.cancel($scope.promiseList[i]);
            }
            $scope.promiseList = [];
        }

        modalInstance.rendered.then(function () {
            var initDot = document.getElementById("loading");
            var loading = $interval(function() {
                if(initDot.innerHTML.length == 5) {
                    initDot.innerHTML = "";
                } else {
                    initDot.innerHTML += ".";
                }
            }, 350); // Dot Speed

            $scope.promiseList.push(loading);

            var $loadingMessage = $('#loadingH1');
            var loadTimer = $timeout(function() {
                $interval.cancel(loading);
                $loadingMessage.hide();
            }, 1500);

            $scope.promiseList.push(loadTimer);

            var mainTimer = $timeout(function(){
                var greeting = "Welcome to my portfolio";
                var $identityDiv = $("#identity-results");
                var $name = "Name: Queenie";
                var $occupation  = "Occupation: Front end developer | Full stack developer";
                var $frontEnd  = "Frontend skills: HTML5 | CSS3 | Javascript";
                var $JSFrameworks = "Javascript frameworks: Angularjs | Reactjs";
                var $JSLibs = "Javascript libraries: Jquery | D3 | Highcharts";
                var $CSSFrameworks = "CSS framework: Bootstrap";
                var $CSSPre = "CSS preprocessors: SASS | LESS";
                var $backEnd = "Backend skills: PHP | Nodejs | Java";

                function initIdentityResults(i){
                    if(i < greeting.length){
                        var greetingTimer = $timeout(function(){
                            initIdentityResults(i + 1);
                        }, 35);

                        $scope.promiseList.push(greetingTimer);
                    }else{
                        var loadingResume = function(){
                            $("#loadingMessage").show();
                            var dotAlpha = document.getElementById("alpha-loading");
                            var loadingAlpha = $interval(function() {
                                if(dotAlpha.innerHTML.length == 6) {
                                    dotAlpha.innerHTML = "";
                                } else {
                                    dotAlpha.innerHTML += ".";
                                    var timerMessage = $timeout(function() {
                                        $interval.cancel(loadingAlpha);
                                        $("#loadingMessage").hide();
                                    }, 2000);

                                    $scope.promiseList.push(timerMessage);
                                }
                            }, 350);  // Dot Speed
                        }

                        // $scope.promiseList.push(loadingAlpha);

                        loadingResume();
                        function initName(i){
                            $("#name").addClass("sign cursor").text($name.substring(0, i));
                            if(i < $name.length){
                                var timerObj = $timeout(function(){
                                    initName(i + 1);
                                }, 35);

                                $scope.promiseList.push(timerObj);

                            }else{
                                $("#name").removeClass("cursor");
                                var nameTimer = $timeout(function() {
                                    initOccupation(0);
                                }, 1500);

                                $scope.promiseList.push(nameTimer);

                            }
                        }
                        var initTimer = $timeout(function() {
                            initName(0);
                        }, 2500);

                        $scope.promiseList.push(initTimer);

                    }


                    function initOccupation(i){
                        $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                        if(i < $occupation.length){
                            var occupTimer = $timeout(function(){
                                initOccupation(i + 1);
                            }, 35);

                            $scope.promiseList.push(occupTimer);

                        }else{
                            $("#occupation").removeClass("cursor");
                            var occupTimer1 = $timeout(function() {
                                initFrontEnd(0);
                            }, 1500);

                            $scope.promiseList.push(occupTimer1);

                        }
                    }
                    function initFrontEnd(i){
                        $('#front-end-span').addClass('fa fa-wrench');
                        $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
                        if(i < $frontEnd.length){
                            var frontTimer = $timeout(function(){
                                initFrontEnd(i + 1);
                            }, 35);

                            $scope.promiseList.push(frontTimer);

                        }else{
                            $('#front-end').removeClass("cursor");
                            var frontTimer1 = $timeout(function() {
                                initJSFrameworks(0);
                            }, 1500);

                            $scope.promiseList.push(frontTimer1);

                        }
                    }
                    function initJSFrameworks(i){
                        $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                        if(i < $JSFrameworks.length){
                            var jsframeTimer = $timeout(function(){
                                initJSFrameworks(i + 1);
                            }, 35);

                            $scope.promiseList.push(jsframeTimer);

                        }else{
                            $('#js-frameworks').removeClass("cursor");
                            var jsframeTimer1 = $timeout(function() {
                                initJSLibs(0);
                            }, 1500);

                            $scope.promiseList.push(jsframeTimer1);

                        }
                    }
                    function initJSLibs(i){
                        $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
                        if(i < $JSLibs.length){
                            var jslibTimer = $timeout(function(){
                                initJSLibs(i + 1);
                            }, 35);

                            $scope.promiseList.push(jslibTimer);

                        }else{
                            $('#js-libs').removeClass("cursor");
                            var jslibTimer1 = $timeout(function() {
                                initCSSFrameworks(0);
                            }, 1500);

                            $scope.promiseList.push(jslibTimer1);

                        }
                    }
                    function initCSSFrameworks(i){
                        $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                        if(i < $CSSFrameworks.length){
                            var cssTimer = $timeout(function(){
                                initCSSFrameworks(i + 1);
                            }, 35);

                            $scope.promiseList.push(cssTimer);

                        }else{
                            $('#css-frameworks').removeClass("cursor");
                            var cssTimer1 = $timeout(function() {
                                initCSSPre(0);
                            }, 1500);
                            $scope.promiseList.push(cssTimer1);

                        }
                    }
                    function initCSSPre(i){
                        $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
                        if(i < $CSSPre.length){
                            var preTimer = $timeout(function(){
                                initCSSPre(i + 1);
                            }, 35);
                            $scope.promiseList.push(preTimer);

                        }else{
                            $('#css-pre').removeClass("cursor");
                            var preTimer1 = $timeout(function() {
                                initBackEnd(0);
                            }, 1500);

                            $scope.promiseList.push(preTimer1);

                        }
                    }
                    function initBackEnd(i){
                        $('#back-end-span').addClass('fa fa-wrench');
                        $('#back-end').addClass("cursor").text($backEnd.substring(0, i));
                        if(i < $backEnd.length){
                            var backTimer = $timeout(function(){
                                initBackEnd(i + 1);
                            }, 35);

                            $scope.promiseList.push(backTimer);

                        }else{

                        }
                    }
                }

                function initProgramAlpha(i){
                    $("#greeting").addClass("cursor").text(greeting.substring(0, i));
                    if(i < greeting.length){
                        var alTimer = $timeout(function(){
                            initProgramAlpha(i + 1);
                        }, 35);

                        $scope.promiseList.push(alTimer);

                    }else{
                        $("#greeting").removeClass("cursor");
                        initIdentityResults(0);
                    }
                }

                initProgramAlpha(0)

            }, 1500);

            $scope.promiseList.push(mainTimer);

        });
    };


})
    .controller("ModalInstanceCtrl", function ($uibModalInstance, $scope,$interval,$timeout,$document) {
        $scope.close = function() {
            $uibModalInstance.dismiss();
        };
    })
    .controller('aboutCtrl', function ($scope) {
        /* animate skill bars */
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },2500);
        });

        Highcharts.chart('container-hobby', {
            title: {
                text: 'My hobby'
            },
            series: [{
                type: 'pie',
                allowPointSelect: true,
                keys: ['name', 'y', 'selected', 'sliced'],
                data: [
                    ['Studying', 80, true,true],
                    ['Music', 20, false],
                    ['Movie', 40, false],
                    ['Game', 20, false],
                    ['Food', 80, false],
                    ['Traveling', 90, false],
                    ['Photography', 30, false],
                    ['Fitness', 20, false]
                ],
                showInLegend: true
            }]
        });

        var text = 'Enthusiasm, Diligent, eager to learn knowledge, Front-end developer, Full stack developer, Front-end skills. Like cakes, sweet snacks. HTML5, CSS3, Javascript, Javascript framework, AJAX, JQuery, Bootstrap, PHP, PHP framework Laravel, Back-end, RESTFul API, Angularjs, design, easygoing, Hardworking, Javascript ES6, AWS, AWS service, PHP development, I like traveling and photography, cooking food, Front-end skills. development experience, Bootstrap make pages responsive, media query, MySQL, MEAN stack, Mongodb, Nodejs, Expressjs, Angularjs, Enjoy life, Enjoy working, Hardworking person, Design create API, My favorite Fruit is Apple. Willing to help others. Chinese. Shopping. IT. Making-friends. ';
        var lines = text.split(/[,\. ]+/g),
            data = Highcharts.reduce(lines, function (arr, word) {
                var obj = Highcharts.find(arr, function (obj) {
                    return obj.name === word;
                });
                if (obj) {
                    obj.weight += 1;
                } else {
                    obj = {
                        name: word,
                        weight: 1
                    };
                    arr.push(obj);
                }
                return arr;
            }, []);

        Highcharts.chart('container-personality', {
            series: [{
                type: 'wordcloud',
                data: data,
                name: 'Occurrences'
            }],
            title: {
                text: 'My Label'
            }
        });
    })
    .controller("contactCtrl", function($scope){
        $("textarea").text("");

        $('.front').click(function(){
        		$('#container-contact').css({
        			'transition':'all 1s',
        			'transform':'rotateY(180deg)',
        		});
        		$('#openDiv').css({
        			'transition':'all 1s .5s',
        			'transform':'rotateX(180deg)',
        			'z-index': '0'
        		});
        });

     	// Open letter
      $scope.openEnvelope = function(){
        $('#letter').css({
					'transition':'all .5s 1s',
					'top':'-600px',
					'height':'550px'
				});
     		$('#contactDiv').css({
     			'transition':'all 1s',
     			'transform':'translateY(450px)'
     		});
				$('#letter hgroup h2').css({
     			'transition':'all 1s',
     			'transform':'rotateZ(180deg)'
				});
         document.getElementById("info").innerHTML = "Contact Me!";
      }

    })
    .controller("portfolioCtrl", function($scope){
      $scope.sendMessage = function(){
        alert("submit");
      }
    });
