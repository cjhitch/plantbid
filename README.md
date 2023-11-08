This is the nextjs template for dk plus

## Getting Started

To install start by pulling the repository onto your local machine. This can be done by visiting our repo and using the clone button.
You may also run the following command in the folder of your choosing.

For Best results you should clone this with renaming to match what it is being used for ie.  
`git clone https://digikey@dev.azure.com/digikey/DK%20Plus/_git/dk_plus_next_template ConfigurablePart.SpaceshipBuilder.App`

```
dk_plus_next_template
git clone https://digikey@dev.azure.com/digikey/DK%20Plus/_git/dk_plus_next_template
```

### Prerequisites

In order to run this, the following software should be installed on your computer globally:  
node  
npm or yarn (prefer npm)

To install node (which will come with npm) visit their website:  
[Node](https://nodejs.dev/)  
This may also be installed alternatively using zsh or homebrew (on macs)

### Installing

After ensuring the computer is set up with your base requirements, from the folder you cloned into:

```
dk_plus_next_template
cd dk_plus_next_template
```

Now time to install the packages - this command will install base packages, React client-side, and server packages. It also sets up the pre-commit hook

```
npm install
```

_If you still are running into issues, delete your package.lock.json files, node modules in the root, client, and server folders and try installing again_

### Running Code

From the root folder lets start up the dev environment

```
npm run dev
```

### - Other Useful Commands -

### Format

`npm run format` - run prettier to format code base

### Lint

`npm run lint` - run Next lint to verify there are no code errors in code base

### Test

`npm run test` - run jest to test with coverage
`npm run test-nc` - run jest without coverage

## VS Code Helpfuls

If you want the plugins in VS Code to work properly ensure you have these added:  
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - VS Code ID: dbaeumer.vscode-eslint  
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - VS Code ID: esbenp.prettier-vscode  
[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - VS Code ID: stylelint.vscode-stylelint

## Built With

-   [Nextjs](https://nextjs.org/) - The web framework used (although technically a library)
-   [Nodejs](https://nodejs.org/en/) - Server side language for api and sequelize

## Folder Structure

The following folder structure has been implemented as it seems to best suit our teams needs. Folders have been used for components to allow for tests to be placed right next to their respective components. It also allows us to add component based styles as this becomes necessary.

<span style="color:lightblue">|- public/</span>  
<span style="color:lightblue">|- src/</span>&emsp;_contains code for frontend and api layer_  
<span style="color:pink">&emsp;|-- app/</span>&emsp;_this is how nextjs does <a href="https://nextjs.org/docs/app/building-your-application/routing/defining-routes">pages</a> - all pages should be here and have a page.ts_
<span style="color:orange">&emsp;&emsp;|--- /Home/</span>&emsp;_main page for the app_  
<span style="color:purple">&emsp;&emsp;&emsp;|---- /model/</span>&emsp;_model folder for this specific page/component_  
<span style="color:green">&emsp;&emsp;&emsp;&emsp;|----- /Home.testid.ts</span>&emsp;_testids for this specific page/component_  
<span style="color:green">&emsp;&emsp;&emsp;&emsp;|----- /Home.const.ts</span>&emsp;_const variables for this specific page/component_  
<span style="color:purple">&emsp;&emsp;&emsp;|---- /Home.tsx</span>&emsp;_component_  
<span style="color:purple">&emsp;&emsp;&emsp;|---- /page.ts</span>&emsp;_for a route in Nextjs this has to be page.ts - for all other components this will stay as index.ts_  
<span style="color:pink">&emsp;|-- assets/</span>&emsp;_contains assets to be used such as css scss and images_  
<span style="color:pink">&emsp;|-- components/</span>&emsp;_sections of pages usually made up of ui pieces_  
<span style="color:orange">&emsp;&emsp;|--- ui/</span>&emsp;_contains individual elements such as a button, input, or card etc._  
<span style="color:purple">&emsp;&emsp;&emsp;|---- /Button/</span>&emsp;_component_  
<span style="color:green">&emsp;&emsp;&emsp;&emsp;|----- /model/</span>&emsp;_model folder for specific component_  
<span style="color:violet">&emsp;&emsp;&emsp;&emsp;&emsp;|------ /ButtonComponent.testid.ts</span>&emsp;testid file for the component*  
<span style="color:violet">&emsp;&emsp;&emsp;&emsp;&emsp;|------ /ButtonComponent.const.ts</span>&emsp;\_const variables for the component*  
<span style="color:green">&emsp;&emsp;&emsp;&emsp;|----- /util/</span>&emsp;util folder for specific component*  
<span style="color:pink">&emsp;|-- hooks/</span>&emsp;\_contains custom hooks*  
<span style="color:pink">&emsp;|-- model/</span>&emsp;_models used between multiple files/components should be put in here_  
<span style="color:pink">&emsp;|-- pages/</span>&emsp;_this should eventually go away - nextjs hasn't finished migrating all items to the app directory. this should ONLY be for api folder_
<span style="color:orange">&emsp;&emsp;|--- /api/</span>&emsp;_this is the folder that nextjs uses for all <a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers">api</a> calls_  
<span style="color:pink">&emsp;|-- store/</span>&emsp;_contains anything for state management available across the app_  
<span style="color:pink">&emsp;|-- util/</span>&emsp;_utilities that are used between multiple files/components should be put in here_  
<span style="color:lightblue">|- config files</span>  
<span style="color:lightblue">|- Readme.md</span>

#### Here is a rough illustration of the differences between page, component, and ui

![folder structure illustration](/src/assets/images/folder-structure.png)

## Opinionated Folder Layout

To bypass the need for an import that needs folder and file name:

```
import Button from './Button/Button';
```

an index file has been added to folders which imports and exports the component allowing:

```
import Button from './Button';
```

furthermore certain folders like cards, may have multiple variations such as card and dashcard. These have been organized with a top level index file to allow for a single import rather than multiple imports i.e.:

```
import Card, { DashCard } from './Cards';
```

instead of

```
import Card from './Cards/Card';
import DashCard from './Cards/DashCard';
```

This is in line with how React does imports.

## Contributing

Currently all members of the DK Plus team are contributing to this project

## Versioning

Versioning should be updated each time there is an edit

## Authors

-   **DK Plus Team**

## Acknowledgments

None at this time, but open for later!
