// Task 2: Scope Chain Visualizer
// Goal: Master lexical scope.
// Task
// • Create nested functions (3–4 levels deep)
// • Declare variables at each level
// • Access variables from:
// parent
// sibling
// global
// • Draw a scope chain diagram

var globalVar = "Global";

function Level1()
{
    var l1 = "Level 1";

    function Level2()
    {
        var l2 = "Level 2";

        function Level3()
        {
            var l3 = "Level 3";
            console.log(l3);
            console.log(l2);
            console.log(l1);
            console.log(globalVar);
            
            //console.log(childvar); // ReferenceError: childvar is not defined
            //console.log(siblingvar); // ReferenceError: siblingvar is not defined

            function childOfLevel3()
            {
                var childvar = "Child of Level 3";
            }
        }

        Level3();
    }

    function Sibling()
    {
        var siblingvar = "Sibling";
    }
    Level2();
}
Level1();