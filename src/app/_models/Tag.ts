export class Tag {
    // change the color choices to personalize this later on
    static readonly ANGULAR = new Tag('Angular', '#E01136');
    static readonly CSHARP = new Tag('C#', '#77BD31');
    static readonly RUBY = new Tag('Ruby', '#A31A0F');
    static readonly JAVASCRIPT = new Tag('Javascript', '#F6B234');
    static readonly JAVA = new Tag('Java', '#56809D');
    static readonly PYTHON = new Tag('Python', '#3C6A95');
    static readonly TYPESCRIPT = new Tag('Typescript', '#396FBC');
    static readonly SQL = new Tag('SQL', '#E7912E');

    static readonly DOTNET = new Tag('.Net', '#AE70E8');
    static readonly WINFORMS = new Tag('Win Forms', '#99438B');
    static readonly NODEJS = new Tag('NodeJS', '#5BBB56');
    static readonly REACT = new Tag('React', '#0D7CA1');
    static readonly ASPNET = new Tag('ASPnet', '#55917F');
    static readonly SERENITY = new Tag('Serenity', '#2DB78F');
    static readonly CUCUMBER = new Tag('Cucumber', '#15AA2A');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }

}