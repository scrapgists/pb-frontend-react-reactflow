import Button from "../foundation/Button";
import Input from "../foundation/Input";
import Text from "../foundation/Text";
import Card from "../foundation/Card";
import CustomNodeComponent from "../foundation/CustomNode"


let id = 0;
let x = 0;

function NodeList({ activeNode, setactiveNode }) {

    const nodeTypes = {
        special: CustomNodeComponent,
    };

    const nodes = [
        {
            "node_id": "1a",
            "node_name": "Open Browser",
            "node_description": "Opens a browser instance",
            "node_properties": <CustomNodeComponent data={{ "node_id": "1a", "node_name": "Open Browser" }}></CustomNodeComponent>
        },
        {
            "node_id": "1b",
            "node_name": "Navigate to a new page",
            "node_description": "Change the current webpage",
            "node_properties": <>
                <Text text={"Navigate to a new page " + id}></Text>
                <Input placeholder="https://www.processbud2.com"></Input>
                <Button buttonText="Apply"></Button>
                <Button buttonText="Reset"></Button>
            </>
        },
        {
            "node_id": "1c",
            "node_name": "Close Browser",
            "node_description": "Close an open browser instance",
            "node_properties": <>
                <Text text={"Close Browser " + id}></Text>
                <Button buttonText="Apply"></Button>
                <Button buttonText="Reset"></Button>
            </>
        },
        {
            "node_id": "2a",
            "node_name": "Click",
            "node_description": "Click an element",
            "node_properties": <>
                <Text text={"Click " + id}></Text>
                <Input placeholder="Element Type"></Input>
                <Button buttonText="Apply"></Button>
                <Button buttonText="Reset"></Button>
                <Button buttonText="Fancy new button"></Button>
            </>
        },
        {
            "node_id": "2b",
            "node_name": "Type into",
            "node_description": "Type into an input field",
            "node_properties": <>
                <Text text={"Type into " + id}></Text>
                <Input></Input>
                <Button buttonText="Apply"></Button>
                <Button buttonText="Cancel"></Button>
            </>
        },
        {
            "node_id": "2c",
            "node_name": "Find Element",
            "node_description": "Searches for an element",
            "node_properties": <>
                <Text text={"Find Element " + id}></Text>
                <Input></Input>
                <Button buttonText="Apply"></Button>
                <Button buttonText="Cancel"></Button>
            </>
        }
    ]

    const getId = () => `${id++}`;
    const getX = () => {
        x += 160
        return x
    }




    function addNode(e) {
        let node_properties
        let node_detail = []
        nodes.map((node) => {
            if (node.node_id === e.currentTarget.id) {
                node_detail = [node.node_name, node.node_description, node.node_id]
                node_properties = node.node_properties
                // console.log(node_properties)

            }
        })

        const newNode = {
            id: getId(),
            type: 'default',
            data: {
                label: node_properties
            },
            position: { x: getX(), y: 25 },
        }
        setactiveNode([...activeNode, newNode], ...activeNode)

    }

    return <div className='bg-gradient-to-b from-pasty to-pasty w-64 h-screen rounded-md shadow-lg'>
        {nodes.map((node) => {
            return <Card data={node} key={node.node_id} addNode={addNode}></Card>
        })}
    </div >;
}

export default NodeList;
