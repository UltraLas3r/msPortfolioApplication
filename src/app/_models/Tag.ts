export class Tag{
    //change the color choices to personalize this later on
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly RUBY = new Tag('Ruby', 'darkred');
    static readonly SQL = new Tag('SQL', 'turqouise');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly DOTNET = new Tag('.Net', 'blue');
    static readonly Python = new Tag('Python', 'purple');
    static readonly WINFORM = new Tag('Windows Forms', 'pink');


    private constructor (private readonly key: string, public readonly color: string){

    }

    toString(){
       return this.key;
    }

}