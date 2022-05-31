string maxi(int n)
{
    string res="";
    if(n>9)
    {
        for(int i=0;i<9;i++)
        {
            res.push_back('9');
        }
        int m=n-9;
        for(int i=0;i<m;i++)
        {
            res.push_back(m+'0');
        }
        return res;
    }
    for(int i=0;i<n;i++)
    {
        res.push_back(n+'0');
    }
    return res;


}

string mini(int n)
{
    string res="";

    if(n==2)
    {
        return "22";
    }
    else if(n<11)
    {
        res.push_back('1');
        int m=n-1;
        for(int i=0;i<m;i++)
        {
            res.push_back(m+'0');
        }
        return res;
    }
    else if(n==11)
    {
        res.push_back('1');
        res.push_back('2');
        res.push_back('2');
        for(int i=0;i<8;i++)
        {
            res.push_back('8');
        }
    }

    else if(n==12)
    {
        res.push_back('1');
        res.push_back('2');
        res.push_back('2');
        for(int i=0;i<9;i++)
        {
            res.push_back('9');
        }
    }
    else if(n==13)
    {
        res.push_back('1');
        res.push_back('3');
        res.push_back('3');
        res.push_back('3');
        for(int i=0;i<9;i++)
        {
            res.push_back('9');
        }
    }

    return res;


}

bool verify(vector<int> &vec)
{
    for(int i=1;i<vec.size();i++)
    {
        if(i!=vec[i] && vec[i]!=0)
        {
            return false;
        }
    }
    return true;
}