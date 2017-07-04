var Node = require("./Node.js")
function BST() 
{
    this.root = null;
    this.node_flag = null;
    //二叉树插入
    this.insert = function(data) 
    {
        var n = new Node(data,null,null);
        if(this.root == null) 
        {
            this.root = n;
        }
        else 
        {
            var current = this.root;
            var parent;
            while(current) 
            {
                parent = current;
                if(data <  current.data) 
                {
                    current = current.left;
                    if(current == null) 
                    {
                        parent.left = n;
                        break;
                    }
                }
                else 
                {
                    current = current.right;
                    if(current == null) 
                    {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    //二叉树递归遍历
    this.print_recursive = function(node) 
    {
        if (node == null)
            return
        if(node.left !== null)
            this.print_recursive(node.left);
        console.log(node.data);
        if(node.right !== null)
            this.print_recursive(node.right);
    }.bind(this);
    this.print_all_recursive = function()
    {
        this.print_recursive(this.root);
    }.bind(this)
    //二叉树非递归遍历
    this.print_line = function(node) 
    {
        if (node == null)
            return
        var n = [];
        n[0] = node;
        var flag = 0;
        var n_temp = Node(null, null, null);
        while(flag !== -1)
        {
            if(n[flag].left !== null)
            {
                n_temp = n[flag].left;
                n[flag].left = null;
                flag = flag + 1;
                n[flag] = n_temp;
                continue
            }
            if(n[flag].data !== null)
                console.log(n[flag].data);
            n[flag].data = null;
            if(n[flag].right !== null)
            {
                n_temp = n[flag].right;
                n[flag].right = null;
                flag = flag + 1;
                n[flag] = n_temp;
                continue
            }
            flag = flag - 1;
        }
    }.bind(this);
    this.print_all_line = function() 
    {
        this.print_line(this.root);
    }.bind(this);
}
module.exports = BST;
